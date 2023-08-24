import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Form,
  DropContainer,
  FilePreview,
  RejectedFiles,
  Button,
} from "./Dropzone.styled";

import { useDispatch } from "react-redux";
import { updateAvatar } from "redux/auth/operations";

import { toast } from "react-hot-toast";

function Dropzone({ closeModal }) {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length === 1) {
      const acceptedFile = acceptedFiles[0];
      setFile(
        Object.assign(acceptedFile, {
          preview: URL.createObjectURL(acceptedFile),
        })
      );
    } else {
      setRejected(rejectedFiles);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    maxFiles: 1,
    onDrop,
  });

  const removeFile = () => {
    setFile(null);
  };

  const removeRejected = () => {
    setRejected([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast(`You need to add an avatar first`, {
        duration: 3000,
      });
      return;
    }

    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);
      dispatch(updateAvatar(formData));
      closeModal();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <DropContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div>
            <p>Drag 'n' drop some file here, or click to select file</p>
            <small>File size should not exceed 1 Mb</small>
          </div>
        )}
      </DropContainer>

      <FilePreview>
        {file && (
          <>
            <img
              src={file.preview}
              alt={file.name}
              width={100}
              height={100}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
            <button type="button" onClick={removeFile}>
              Delete
            </button>
            <p>{file.name}</p>
          </>
        )}
      </FilePreview>
      <RejectedFiles>
        {rejected && (
          <ul>
            {rejected.map(({ file, errors }) => (
              <li key={file.name}>
                <div>
                  <p>Unable to upload file {file.name}</p>
                  <ul>
                    {errors.map((error) => (
                      <li key={error.code}>{error.message}</li>
                    ))}
                  </ul>
                </div>
                <button type="button" onClick={removeRejected}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </RejectedFiles>
      <Button type="submit">Upload</Button>
    </Form>
  );
}

export default Dropzone;

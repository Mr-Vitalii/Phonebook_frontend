import { useState } from "react";
import { Checkbox, Container, Input } from "./Filter.styled";

import { useSelector, useDispatch } from "react-redux";
import { selectStatusFilter } from "redux/contacts/selectors";
import { setStatusFilter } from "redux/contacts/filterSlice";
import { fetchContacts } from "redux/contacts/operations";

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (e) => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  const handleCheckboxChange = (event) => {
    const checkedStatus = event.target.checked;
    setIsChecked(checkedStatus);

    if (checkedStatus) {
      dispatch(fetchContacts({ favorite: true }));
    } else {
      dispatch(fetchContacts({ favorite: false }));
    }
  };

  return (
    <Container>
      <label>
        Fined contacts by name
        <br />
        <Input type="text" value={filter} onChange={handleFilterChange} />
      </label>
      <label>
        Favorite 
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </Container>
  );
};

export { Filter };

const inputs = [
  {
    type: "text",
    name: "name",
    placeholder: "Name",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    type: "number",
    name: "phone",
    placeholder: "Phone",
  },
];

const regName =
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export { inputs, regName, regEmail, regPhone };

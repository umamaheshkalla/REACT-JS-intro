const className = "greeting";
const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Uma", lastName: "Mahesh" };
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)} </h1>
    <p className={className}> Good To see You Mr.Uma </p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

import React, { useState } from "react";
import StepWizard from "react-step-wizard";

import AdminLogin from "./AdminLogin";
import { Admin } from "../profile/Admin";

const MainAdmin = () => {
  const [values, setValues] = useState("");

  return (
    <StepWizard>
      <AdminLogin />
      <Admin />
    </StepWizard>
  );
};

export default MainAdmin;

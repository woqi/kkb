import React from "react";

import _Form from "./Form";
import useForm from "./useForm";
import Field from "./Field";

// const Form = _Form
const Form = React.forwardRef(_Form) 


Form.useForm = useForm

export {Field, useForm}

export default Form
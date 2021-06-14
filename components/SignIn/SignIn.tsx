import styled from "styled-components";
import { useForm } from "react-hook-form";

type FormType = {
  firstName: string;
  lastName: string;
  user: string;
};

function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>();
  const onSubmitHandler = (data) => console.log(data);
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormControl>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          {...register("firstName", { required: "please enter a first name" })}
        />
        {errors?.firstName?.message && (
          <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          {...register("lastName", { required: "please enter a last name" })}
        />
        {errors?.lastName?.message && (
          <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <label htmlFor="user-question">Why are you here?</label>
        <select {...register("user")} id="user-question">
          <option value="developer">Developer</option>
          <option value="guest">Guest</option>
          <option value="other">other</option>
        </select>
      </FormControl>
      <input type="submit" />
    </Form>
  );
}

export default SignIn;

const Form = styled.form`
  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 0.5rem 1rem;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  font-weight: 700;
  text-transform: uppercase;
`;

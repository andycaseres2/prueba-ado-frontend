import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import LoginBox from "../../components/boxes/LoginBox";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [infoLogin, setInfoLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Validar el campo de email
    if (!infoLogin.email) {
      newErrors.email = "Email es requerido";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(infoLogin.email)) {
      newErrors.email = "Email no válido";
      valid = false;
    }

    // Validar el campo de password
    if (!infoLogin.password) {
      newErrors.password = "Contraseña es requerida";
      valid = false;
    } else if (infoLogin.password.length < 4) {
      newErrors.password = "La contraseña debe tener al menos 4 caracteres";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Despachar la acción de inicio de sesión con la información proporcionada
      dispatch(login(infoLogin));

      // Limpiar los campos de inicio de sesión después de despachar la acción
      setInfoLogin({ email: "", password: "" });

      // Redirigir a la página Dashboard
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-primary">
      <LoginBox
        handleLogin={handleLogin}
        errors={errors}
        setErrors={setErrors}
        setInfoLogin={setInfoLogin}
        infoLogin={infoLogin}
      />
    </div>
  );
};

export default Login;

import Button from "../buttons/Button";
import Input from "../inputs/Input";
import Text from "../texts/Text";

type Props = {
  handleLogin: () => void;
  setInfoLogin: (infoLogin: { email: string; password: string }) => void;
  setErrors: (errors: { email: string; password: string }) => void;
  infoLogin: { email: string; password: string };
  errors: { email: string; password: string };
};

const LoginBox = ({
  handleLogin,
  setInfoLogin,
  setErrors,
  infoLogin,
  errors,
}: Props) => {
  return (
    <div className="flex flex-col py-7 lg:p-8 justify-center items-center w-full lg:w-1/2 lg:h-1/2 lg:shadow-lg rounded-md bg-white">
      <Text
        design="text-4xl lg:text-5xl font-bold text-primary mb-2"
        text="Login"
      />
      <div className="w-full flex flex-col gap-8 px-6 lg:p-0 justify-center items-center">
        <div className="flex flex-col w-full lg:p-8 gap-6 justify-center">
          <div className="w-full flex flex-col gap-1">
            <Input
              type="email"
              placeholder="Email"
              value={infoLogin.email}
              onChange={(e) => {
                setInfoLogin({ ...infoLogin, email: e.target.value });
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && <Text design="text-red-500" text={errors.email} />}
          </div>
          <div className="w-full flex flex-col gap-1">
            <Input
              type="password"
              placeholder="Password"
              value={infoLogin.password}
              onChange={(e) => {
                setInfoLogin({ ...infoLogin, password: e.target.value });
                setErrors({ ...errors, password: "" });
              }}
            />
            {errors.password && (
              <Text design="text-red-500" text={errors.password} />
            )}
          </div>
        </div>
        <Button
          action={handleLogin}
          design="w-full lg:w-1/2"
          text="Login"
          disabled={!infoLogin.email || !infoLogin.password} // Desactiva el botón si los campos están vacíos
        />
      </div>
    </div>
  );
};

export default LoginBox;

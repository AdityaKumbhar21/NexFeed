import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      {/* Top navbar */}
      <header className="w-full bg-white shadow-md p-4 flex items-center space-x-3">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
        <h2 className="text-xl font-bold">NeXFeed</h2>
      </header>

      {/* Login form centered below navbar */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;

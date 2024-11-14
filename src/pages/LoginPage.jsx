import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../Components/ui/card";
import InActive from "../Components/InActive";
import UnderConstruction from "../Components/UnderConstruction";
import useActiveStatus from "../utils/useActiveStatus";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";

export default function LoginPage() {
  const activeStatus = useActiveStatus();
  return activeStatus ? (
    <div className="bg-black">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Please enter your credentials to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username or Email
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username or email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            Forgot your password?{" "}
            <a href="#" className="text-blue-500">
              Reset it here
            </a>
            .
          </p>
        </CardFooter>
      </Card>
      export default LoginCard;
    </div>
  ) : (
    <InActive />
  );
}

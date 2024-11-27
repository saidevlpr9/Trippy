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
import { Link } from "react-router-dom";

export default function LoginPage() {
  const activeStatus = useActiveStatus();
  return activeStatus ? (
    <div className="bg-white h-auto p-20 flex justify-center items-center">
      <div>
        <Card className="h-auto p-4 bg-black text-white">
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
                  className="block text-sm font-medium text-white"
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
                  className="block text-sm font-medium text-white"
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
          <CardFooter className="flex flex-col gap-3">
            <p className="text-sm text-white">
              Forgot your password?{" "}
              <Link to="/resetPassword" className="text-blue-500">
                Reset it here
              </Link>
              .
            </p>
            <p className="text-sm text-gray-500">
              New to Trippy?{" "}
              <Link to="/signUp" className="text-blue-500">
                Join here!
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  ) : (
    <InActive />
  );
}

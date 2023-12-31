const getErrorMessage = (error: unknown): string => {
  let message: string;

  // extract error message from error object
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Unknown Error";
  }

  return message;
};

export default getErrorMessage;

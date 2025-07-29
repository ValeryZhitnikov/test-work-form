const createDelay = (delay: number) => {
  return new Promise(resolve => setTimeout(resolve, delay));
} 

export const loginUser = async (email: string, password: string): Promise<void> => {
  await createDelay(3000);
  console.log(email);
  console.log(password);
};

export const resetPassword = async (email: string): Promise<void> => {
  await createDelay(1500);
  console.log(email);
};

import * as bcrypt from 'bcrypt';
export async function hashPassword(password: string) {
const hashedPassword = await bcrypt.hash(password, 10);
return hashedPassword;
}

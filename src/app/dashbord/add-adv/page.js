import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import Client from '@/models/Client';
import AddAdvPage from '@/templates/AddAdvPage'
import { authOptions } from '@/utils/authOptions';

async function AddAdv() {
    const session = await getServerSession(authOptions);
    if(!session) redirect("/signin")
    const email = session?.user.email;
    const client = await Client.findOne({email})
  return (
    <AddAdvPage email={email} role={client.role}/>
  )
}

export default AddAdv
import 'tailwindcss/tailwind.css'
import Trips from '@/app/components/Trips';

const Home = ():JSX.Element =>  {
  return (
    <main className="min-h-screen min-w-screen p-10 bg-secondary">
      <Trips />
    </main>
  );
}

export default Home;

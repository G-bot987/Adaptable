import Header from './mainComponents/Header/Header';
import { headerData } from '../../data/headerData';

export default function Home() {
  return (
    <main >
      <Header {...{headerData}} />

    </main>
  )
}

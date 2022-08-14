import { useContext, useState } from 'react';
import { Card } from './components/Card';
import { ColoredMessage } from './components/ColoredMessage';
import { CssModules } from './components/CssModules'
import { AdminFlagContext } from './components/providers/AdminFlagProvider';



export const App = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
      <>
          <h1 style={{color: "red"}}>こんにちは</h1>
          <ColoredMessage color="blue">元気？</ColoredMessage>
          <ColoredMessage color="pink">そうだな</ColoredMessage>
          <button onClick={onClickButton}>ボタン</button>
          <p>{num}</p>
          
          <CssModules></CssModules>

          <br /><br /><br /><br />

          {isAdmin ? <span>管理者です</span> : <span>ゲストです</span>}
          <button onClick={onClickSwitch}>切り替え</button>
          <Card isAdmin={isAdmin} />
      </>
    );
  };
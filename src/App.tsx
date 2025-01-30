import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI
} from '@tonconnect/ui-react';
import {
  ClipboardIconButton,
  ClipboardRoot
} from "@/components/ui/clipboard"

import './App.css';


export function App() {
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
    return (
      <div className="app__container">
        <div className="app_content__container">
          {
            !userFriendlyAddress && (
              <>
                <div className="app_content__text">Click below</div>
                <TonConnectButton />
              </>
            )
          }
          {userFriendlyAddress && (
            <button
              className="app_content__button"
              onClick={() => tonConnectUI.disconnect()}
            >
              disconnect
            </button>
          )}
          {
            userFriendlyAddress && (
              <ClipboardRoot value={userFriendlyAddress} className='app_clip__contaner'>
                <p className="app_clip__text">{userFriendlyAddress}</p>
                <ClipboardIconButton />
              </ClipboardRoot>
              
            )
          }
        </div>
      </div>
    );
}

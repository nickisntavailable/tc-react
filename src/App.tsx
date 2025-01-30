import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI
} from '@tonconnect/ui-react';

import './App.css';
import { useCallback, useState } from 'react';


export function App() {
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  const [copied, setCopied] = useState(false);

  const copyCallback = useCallback(
    () => {
      navigator.clipboard.writeText(userFriendlyAddress);
      setCopied(true);
    },
    [userFriendlyAddress]
  );
  const disconnectCallback = useCallback(
    () => tonConnectUI.disconnect(),
    [tonConnectUI]
  );
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
              onClick={disconnectCallback}
            >
              disconnect
            </button>
          )}
          {
            userFriendlyAddress && (
              <div className="app_clip__contaner" onClick={copyCallback}>
                <p className="app_clip__text">{userFriendlyAddress}</p>
                <button className={`app_clip__btn ${copied ? 'active' : ''}`}>
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              
            )
          }
        </div>
      </div>
    );
}

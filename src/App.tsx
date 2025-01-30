import {
  TonConnectButton,
  useTonAddress
} from '@tonconnect/ui-react';

export function App() {
  const userFriendlyAddress = useTonAddress();
    return (
      <div>
        <div>Click below</div>
        <TonConnectButton />

        {
          userFriendlyAddress && (
            <p>{userFriendlyAddress}</p>
          )
        }
      </div>
    );
}

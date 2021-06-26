import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";
import UpdateContract from "./components/UpdateContract";


import './styles.scss';

const Options: React.FC = () => {
  return (
    <div>
      <form>
        <p>
          <label htmlFor="username">Your Name</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            spellCheck="false"
            autoComplete="off"
            required
          />
        </p>
        <p>
          <label htmlFor="logging">
            <input type="checkbox" name="logging" /> Show the features enabled
            on each page in the console
          </label>

          <p>cool cool cool</p>
        </p>
      </form>
    </div>
  );
};

export default Options;

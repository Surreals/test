import { CssBaseline, TextField, ThemeProvider } from "@mui/material";
import { theme } from "./utils/themeCreator";
import { currencies } from "./utils/currencies";
import { Layout } from "./layout/Layout";
import { useState } from "react";

const itemPrice = 10;

function App() {
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Layout currency={currency} setCurrency={setCurrency}>
        <TextField title='Amount' label='Amount' type="number" value={amount}  inputProps={{min: 0}} onChange={(e) => setAmount(e.target.value)}/>
        <TextField title='Price' label='Price' disabled value={`${currency}: ${amount * itemPrice * currencies[currency]}`}/>

        </Layout>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

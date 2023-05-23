import { Box, CssBaseline, TextField, ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from "./utils/themeCreator";
import { currencies } from "./utils/currencies";
import { Layout } from "./layout/Layout";
import { useState } from "react";

const itemPrice = 10;

function App() {
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState(0)

  const desktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Layout currency={currency} setCurrency={setCurrency}>
          <Box sx={{display: 'flex', flexDirection: desktop ? 'row' : 'column', gap: 2}}>
            <TextField title='Amount' label='Amount' type="number" value={amount}  inputProps={{min: 0}} onChange={(e) => setAmount(e.target.value)}/>
            <TextField title='Price' label='Price' disabled value={`${currency}: ${amount * itemPrice * currencies[currency]}`}/>
          </Box>

        </Layout>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

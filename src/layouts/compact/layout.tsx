import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Header from "../_common/header-simple";
import main from "../main";


type Props = {
  children : React.ReactNode;
}
export default function CompactLayout({children}: Props){
  return(
    <>
    
    <Header />

    <Container component='main'>
      <Stack
      sx={{
        py:12,
        m:"auto",
        maxWidth:400,
        minHeight: '100hv',
        textAlign:'center',
        justifyContent: 'center',
      }}
      >
        {children}
      </Stack>
    </Container>
    </>
  )
}
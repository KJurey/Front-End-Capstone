import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainComponent from "./pages/MainComponent/mainComponent.jsx";
import GlobalStyle from "./globalstyles.jsx";
import Booking from "./pages/Booking/Booking.jsx";
import BookingConfirm from "./pages/BookingConfirm/BookingConfirm.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/booking" element={<Booking />}/>
          <Route path="/bookingconfirm" element={<BookingConfirm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

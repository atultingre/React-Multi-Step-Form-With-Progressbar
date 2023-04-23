import "./App.css";
import Form from "./components/Form";
import { FormProvider } from "./contxt/FormContext";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="">
      <FormProvider>
        <ProgressBar/>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;

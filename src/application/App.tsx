import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

import { TodoPage } from "./pages/TodoPage.tsx";
import { store } from "../infrastructure/store/store.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <NextUIProvider>
                <TodoPage />
            </NextUIProvider>
        </Provider>
    </StrictMode>
)

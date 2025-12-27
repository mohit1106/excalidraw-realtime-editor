import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkMTc3YjhiYi1kOThmLTQxM2ItYWE5Ni0yMWVkZDM1MDhlY2QiLCJpYXQiOjE3NjY3MDk4MzR9.APZjeOXNCGoaZSm67-Y1csSUJKfFaGELqDIxNcbPEdM`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }

}


import { Box, Button, Card, TextField, Dialog, Avatar, Theme } from "@radix-ui/themes";
import { Container, Flex, Text } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./components/Header";
import { useState } from "react";
import CreatePool from "./components/CreatePool";
import useGetPools from "./hooks/useGetPools";
import PoolDisplay from "./components/PoolDisplay"

// import CreatePool from "./component/CreatePool"
// import useCreatePool from "./hooks/UseCreatePool";


configureWeb3Modal();

function App() {

    const renderPools = useGetPools();

    const allPools = renderPools.map((item, index) => ({
        id: index,
        totalStakers: item[0],
        totalStakedAmount: item[1],
        rewardReserve: item[2],
        rewardRate: item[3],
    }))

    console.log("allPools", allPools);

    const [pool, setPool] = useState(0);


    return (
        <Container>
            <Header />
            <main className="mt-6" >
                <CreatePool />
                <Box className="u-class-flex">
                    {allPools.map((pool) => (
                        <PoolDisplay 
                        
                            key={pool.id}
                            totalStakers={Number(pool.totalStakers)}
                            totalStakedAmount={Number(pool.totalStakedAmount)}
                            rewardReserve={Number(pool.rewardReserve)}
                            rewardRate={Number(pool.rewardRate)}
                        />
                    ))}
                </Box>        
            </main>
        </Container>
    );
}

export default App;

import { Box, Button, Card, TextField, Dialog, Avatar, Theme } from "@radix-ui/themes";
import { Container, Flex, Text } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./components/Header";
import { useState } from "react";
import CreatePool from "./components/CreatePool";

// import CreatePool from "./component/CreatePool"
// import useCreatePool from "./hooks/UseCreatePool";


configureWeb3Modal();

function App() {
    // const { loading, data: pools } = useStakingPools();
    // const [rewardRate, setRewardRate] = useState("");

    // const handleCreatePool = useCreatePool(rewardRate);



    return (
        <Container>
            <Header />
            <main className="mt-6">
                <CreatePool />

                <Card style={{ maxWidth: 240 }}>
                    <Flex gap="3" align="center">
                        <Avatar
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold">
                                USDCDAO
                            </Text>
                            <Text as="div" size="2" color="gray">
                                10%
                            </Text>
                        </Box>
                    </Flex>
                </Card>





            </main>
        </Container>
    );
}

export default App;

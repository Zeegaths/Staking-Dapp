import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";

const CreatePool = () => {
    const [value, setValue] = useState(0);

    const handleCreatePool = useCreatePool(value);

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>Create Pool</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Create Pool</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Create new pool
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Rate
                        </Text>
                        <TextField.Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Enter Reward Rate"
                        />
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleCreatePool}>Save Pool</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}
export default CreatePool;
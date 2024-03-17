import { Button, Dialog } from "@radix-ui/themes";
import useUnStake from "../hooks/useUnstake";

const UnStake = ({ id }) => {
    const unStake = useUnStake(); // Initialize useUnStake hook

    const handleUnStake = () => {
        unStake(id); // Call the unStake function with id
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className="bg-blue-600" onClick={handleUnStake}>Un StakeToken</Button>
            </Dialog.Trigger>
        </Dialog.Root>
    );
};

export default UnStake;
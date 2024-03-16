import { Box, Card, Flex, Text } from "@radix-ui/themes";
import StakeComponent from "./Stake";
import UnstakeComponent from "./unStake";

const PoolDisplay = ({
  totalStakers,
  totalStakedAmount,
  rewardReserve,
  rewardRate,
}) => {
  return (
    <Card size="10" style={{ width: 500}}>
      <Flex gap="3" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <div>
              <Text as="div">
                <span className="font-medium  ">Total Stakers:</span>
                {totalStakers}
              </Text>
              <Text as="div">
                <span className="font-medium  ">Total Staked Amount: </span>
                {totalStakedAmount}
              </Text>
              <Text as="div">
                <span className="font-medium  ">Reward Reserve:</span>
                {rewardReserve}
              </Text>
              <Text as="div">
                <span className="font-medium  ">
                  Reward Rate: {rewardRate}{" "}
                </span>
              </Text>
            </div>
          </Flex>
          <StakeComponent />
          <UnstakeComponent />
        </Box>
      </Flex>
    </Card>
  );
};

export default PoolDisplay;
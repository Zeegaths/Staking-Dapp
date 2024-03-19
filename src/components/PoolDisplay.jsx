import { Box, Card, Flex, Text } from "@radix-ui/themes";
import Stake from "./Stake";
import UnStake from "./unStake"

const PoolDisplay = ({
  id,
  totalStakers,
  totalStakedAmount,
  rewardReserve,
  rewardRate,
}) => {
  return (
    <Card className="card flip-card" size="10" style={{ width: 500, margin: "auto"}}>
      <div className="flip-card-inner ">
      <div className="flip-card-front" style={{ margin: "auto"}}>
      <h1>Staking Pool</h1>
    </div>
      <Flex gap="3" align="center" className="flip-card-back">
        <Box width={"100%"}>
          <Box align={"center"}>
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
          </Box>
          <Stake />
          <br />
          <br />
          <UnStake />
        </Box>
      </Flex>
      </div>

    </Card>
  );
};
export default PoolDisplay;
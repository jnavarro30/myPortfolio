import { Title, Paper, Text } from "@mantine/core";

function AboutSummary() {
  return (
    <div className="flex flex-col items-center">
      <Title order={1}>About Me</Title>
      <Paper className="m-10" p="md">
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          nobis reprehenderit, voluptas alias atque ut ab ad totam quo natus,
          quia soluta minima ipsam aliquid delectus! Iusto explicabo reiciendis
          assumenda odio obcaecati non quae molestias atque. Expedita dicta
          minus autem nisi, nihil aspernatur, corrupti molestias obcaecati
          laudantium unde sit esse?
        </Text>
      </Paper>
    </div>
  );
}

export default AboutSummary;

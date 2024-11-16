import Heading from "./components/Heading";
import Grid from "./components/Grid";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Heading className="font-bold">Featured meals</Heading>
      <Grid className="grid-cols-3 gap-x-2">
        <Card>
          <Heading>Meal 1</Heading>
          <hr className="border border-zinc-200" />
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            aliquid.
          </p>
        </Card>
        <Card>
          <Heading>Meal 2</Heading>
          <hr className="border border-zinc-200" />
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            aliquid.
          </p>
        </Card>
        <Card>
          <Heading>Meal 3</Heading>
          <hr className="border border-zinc-200" />
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            aliquid.
          </p>
        </Card>
      </Grid>
      <Heading className="font-bold">Featured drinks</Heading>
      <Grid className="grid-cols-3 gap-x-2">
        <Card>
          <Heading>Drink 1</Heading>
          <hr className="border border-zinc-200" />
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            aliquid.
          </p>
        </Card>
        <Card>
          <Heading>Drink 2</Heading>
          <hr className="border border-zinc-200" />
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            aliquid.
          </p>
        </Card>
        <Card>
          <Heading>Drink 3</Heading>
          <hr className="border border-zinc-200" />
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            aliquid.
          </p>
        </Card>
      </Grid>
    </main>
  );
}

import DockerIcon from '../icons/docker.icon';
import NestIcon from '../icons/nest.icon';
import NextIcon from '../icons/next.icon';
import NodeIcon from '../icons/node.icon';
import OrbitingCircles from '../magicui/orbiting-circles';

const stacks = [
  {
    name: 'Next.js',
    icon: <NextIcon />,
  },
  {
    name: 'Node.js',
    icon: <NodeIcon />,
  },
  {
    name: 'Nest.js',
    icon: <NestIcon />,
  },
  {
    name: 'Docker',
    icon: <DockerIcon />,
  },
];

export default function StackOrbit() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden'>
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black'>
        Stacks
      </span>

      {stacks.map((stack, index) => (
        <OrbitingCircles
          reverse={index % 2 === 0}
          className='size-[42px] border-none bg-transparent'
          duration={10 + Math.random() * 10}
          delay={1 + Math.random() * 4}
          radius={80 + 40 * index}
          key={index}
        >
          <span className='text-xl'>{stack.icon}</span>
        </OrbitingCircles>
      ))}
    </div>
  );
}

import IconCloud from '@/components/magicui/icon-cloud';

const slugs = [
  'typescript',
  'react',
  'nodedotjs',
  'express',
  'amazonaws',
  'postgresql',
  'nginx',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'figma',
  'nextdotjs',
  'cloudflare',
  'nestjs',
  'mongodb',
  'redis',
];

export function MyStacks() {
  return (
    <div className='max-w-[32rem]'>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

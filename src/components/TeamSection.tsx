"use client";
import React from "react";
import { Avatar } from '@nextui-org/avatar'
// import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Spacer } from '@nextui-org/spacer'
import { cn } from '@nextui-org/theme'
import { useRouter } from 'next/navigation'
// import { Icon } from '@iconify/react'

const teamMembers: TeamMember[] = [
  {
    name: "Lirvis",
    avatar: "https://avatars.githubusercontent.com/u/61810811?s=96&v=4",
    role: "DEV",
    bio: "主要开发",
    social: {
      github: "@john-doe",
    },
  },
  {
    name: "Peaksol",
    avatar: "https://codeberg.org/avatars/b3abc2ae23d9d6ea4476183770472133a73347457e0524e219575de28331c280?size=64",
    role: "DOC",
    bio: "文档编写/标准设计",
    social: {
      github: "@jane-doe",
    },
  },
  {
    name: "Mind Dance",
    avatar: "https://avatars.githubusercontent.com/u/42174702?s=64&v=4",
    role: "MOD",
    bio: "社区服务器管理",
    social: {
      github: "@robert-doe",
    },
  },
  {
    name: "Alfaris",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=2246514868&s=640",
    role: "DES",
    bio: "美术设计",
    social: {
      github: "@robert-doe",
    },
  },
  {
    name: "Shinda",
    avatar: "https://avatars.githubusercontent.com/u/157275997?s=64&v=4",
    role: "SYS/DEV",
    bio: "早期赞助/开发者",
    social: {
      github: "@robert-doe",
    },
  },
];

export function TeamSection() {
  const router = useRouter();
  return (
    <section className="flex max-w-4xl flex-col items-center">
      <div className="flex max-w-xl flex-col text-center">
        {/*<h2 className="font-medium text-secondary">We&apos;re hiring!</h2>*/}
        <h2 className="text-secondary">社区服务器</h2>
        <div className="flex h-10 items-center justify-center gap-2">
          <span className="text-2xl">#onebot:matrix.meowl.cc</span>
          <Divider orientation="vertical" />
          <Button color="secondary" onClick={() => router.push("https://matrix.to/#/#onebot:matrix.meowl.cc")}> Join us</Button>
        </div>
        <Spacer y={8} />
        <h1 className="text-4xl font-medium tracking-tight">贡献者</h1>
        {/*<h2 className="text-large text-default-500">*/}
        {/*  Our philosophy is to build a great team and then empower them to do*/}
        {/*  great things.*/}
        {/*</h2>*/}
        {/*<Spacer y={4} />*/}
        {/*<div className="flex w-full justify-center gap-2">*/}
        {/*  <Button variant="ghost">About us</Button>*/}
        {/*  <Button color="secondary">Open positions</Button>*/}
        {/*</div>*/}
      </div>
      <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  )
}

type TeamMember = {
  name: string
  avatar: string
  role: string
  bio?: string
  social: {
    github?: string
  }
}

type TeamMemberCardProps = React.HTMLAttributes<HTMLDivElement> & TeamMember

const TeamMemberCard = React.forwardRef<HTMLDivElement, TeamMemberCardProps>(
  ({ children, avatar, name, role, bio, social, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center rounded-large bg-content1 px-4 py-6 text-center shadow-small',
        className,
      )}
      {...props}
    >
      <Avatar className="h-20 w-20" src={avatar} />
      <h3 className="mt-2 font-medium">{name || children}</h3>
      <span className="text-small text-default-500">{role}</span>
      <p className="mb-4 mt-2 text-default-600">{bio}</p>
      <div className="flex gap-4">
        {/* todo: 添加 Matrix 联系方式 */}
        {/*{social?.twitter && (*/}
        {/*  <Link isExternal href="#">*/}
        {/*    <Icon className="text-default-400" icon="bi:twitter" width={20} />*/}
        {/*  </Link>*/}
        {/*)}*/}
        {/*{social?.linkedin && (*/}
        {/*  <Link isExternal href="#">*/}
        {/*    <Icon className="text-default-400" icon="bi:linkedin" width={20} />*/}
        {/*  </Link>*/}
        {/*)}*/}
        {/* 我觉得放 GitHub 是否有点公开处刑 */}
        {/*{social?.github && (*/}
        {/*  <Link isExternal href="#">*/}
        {/*    <Icon className="text-default-400" icon="bi:github" width={20} />*/}
        {/*  </Link>*/}
        {/*)}*/}
      </div>
    </div>
  ),
)

TeamMemberCard.displayName = "TeamMemberCard";
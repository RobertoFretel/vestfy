import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export const user = {
  avatar: 'https://github.com/shadcn.png',
  nome: 'Marco Rossi',
  email: 'marco.rossi@gmail.com'
}

export default function Profile () {
  return (
    <div className="w-full flex justify-between items-center">
      <span>{user.nome}</span>
      <Avatar>
        <AvatarImage src={user.avatar} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

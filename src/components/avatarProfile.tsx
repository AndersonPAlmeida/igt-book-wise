import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'

const ImageContainerVariants = cva(
  'relative rounded-full overflow-hidden bg-gradient-vertical',
  {
    variants: {
      variant: {
        asideImage: 'size-8',
        comment: 'size-10',
        profilePage: 'size-20',
      },
    },
    defaultVariants: {
      variant: 'comment',
    },
  },
)

interface AvatarProfileProps
  extends VariantProps<typeof ImageContainerVariants> {
  imageSrc?: string | null
}

export function AvatarProfile({ imageSrc, variant }: AvatarProfileProps) {
  return (
    <figure className={ImageContainerVariants({ variant })}>
      {imageSrc !== undefined && imageSrc !== null && (
        <Image
          src={imageSrc}
          fill={true}
          alt="Foto de perfil"
          className="rounded-full object-cover p-[2px]"
        />
      )}
    </figure>
  )
}

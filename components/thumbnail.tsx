interface ThumbnailProps {
  title: string;
}

export function Thumbnail({ title }: ThumbnailProps) {
  return (
    <div
      style={{
        fontSize: 120,
        letterSpacing: '-0.02em',
        backgroundImage:
          'linear-gradient(to right bottom, hsl(35, 4%, 8%) 0%, hsl(35, 4%, 4%) 100%)',
        color: 'hsl(35, 4%, 96%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 120,
      }}
    >
      <div
        style={{
          backgroundImage:
            'linear-gradient(to right bottom, hsl(35, 4%, 96%) 40%, hsl(35, 4%, 40%) 100%)',
          backgroundClip: 'text',
          color: 'transparent',
          boxShadow:
            '-40px -80px 20px hsl(0, 0%, 100%, 0.2), 0px 2px 4px hsl(0, 0%, 0%)',
        }}
      >
        {title}
      </div>
    </div>
  );
}

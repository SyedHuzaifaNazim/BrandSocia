import Link from 'next/link'

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  ...props 
}) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-300'
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700',
    secondary: 'bg-secondary text-white hover:bg-purple-700',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-blue-50'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
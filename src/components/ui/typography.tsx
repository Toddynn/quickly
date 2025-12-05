import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/utils';

interface TypographyH1Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}
export function TypographyH1({ className, children, ...props }: TypographyH1Props) {
	return (
		<h1 className={cn('scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance', className)} {...props}>
			{children}
		</h1>
	);
}

interface TypographyH2Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}
export function TypographyH2({ className, children, ...props }: TypographyH2Props) {
	return (
		<h2 className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)} {...props}>
			{children}
		</h2>
	);
}

interface TypographyH3Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}
export function TypographyH3({ className, children, ...props }: TypographyH3Props) {
	return (
		<h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
			{children}
		</h3>
	);
}

interface TypographyH4Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}
export function TypographyH4({ className, children, ...props }: TypographyH4Props) {
	return (
		<h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props}>
			{children}
		</h4>
	);
}

interface TypographyPProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}
export function TypographyP({ className, children, ...props }: TypographyPProps) {
	return (
		<p className={cn('leading-7 not-first:mt-6', className)} {...props}>
			{children}
		</p>
	);
}

interface TypographyBlockquoteProps extends DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> {}
export function TypographyBlockquote({ className, children, ...props }: TypographyBlockquoteProps) {
	return (
		<blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props}>
			{children}
		</blockquote>
	);
}

interface TypographyTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export function TypographyTable({ className, children, ...props }: TypographyTableProps) {
	return (
		<div className={cn('my-6 w-full overflow-y-auto', className)} {...props}>
			<table className="w-full">{children}</table>
		</div>
	);
}

interface TypographyTableHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}
export function TypographyTableHeader({ className, children, ...props }: TypographyTableHeaderProps) {
	return (
		<thead className={className} {...props}>
			{children}
		</thead>
	);
}

interface TypographyTableBodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}
export function TypographyTableBody({ className, children, ...props }: TypographyTableBodyProps) {
	return (
		<tbody className={className} {...props}>
			{children}
		</tbody>
	);
}

interface TypographyTableRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {}
export function TypographyTableRow({ className, children, ...props }: TypographyTableRowProps) {
	return (
		<tr className={cn('even:bg-muted m-0 border-t p-0', className)} {...props}>
			{children}
		</tr>
	);
}

interface TypographyTableHeadProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {}
export function TypographyTableHead({ className, children, ...props }: TypographyTableHeadProps) {
	return (
		<th className={cn('border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right', className)} {...props}>
			{children}
		</th>
	);
}

interface TypographyTableCellProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {}
export function TypographyTableCell({ className, children, ...props }: TypographyTableCellProps) {
	return (
		<td className={cn('border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right', className)} {...props}>
			{children}
		</td>
	);
}

export function TypographyTableExample() {
	return (
		<TypographyTable>
			<TypographyTableHeader>
				<TypographyTableRow>
					<TypographyTableHead>King&apos;s Treasury</TypographyTableHead>
					<TypographyTableHead>People&apos;s happiness</TypographyTableHead>
				</TypographyTableRow>
			</TypographyTableHeader>
			<TypographyTableBody>
				<TypographyTableRow>
					<TypographyTableCell>Empty</TypographyTableCell>
					<TypographyTableCell>Overflowing</TypographyTableCell>
				</TypographyTableRow>
				<TypographyTableRow>
					<TypographyTableCell>Modest</TypographyTableCell>
					<TypographyTableCell>Satisfied</TypographyTableCell>
				</TypographyTableRow>
				<TypographyTableRow>
					<TypographyTableCell>Full</TypographyTableCell>
					<TypographyTableCell>Ecstatic</TypographyTableCell>
				</TypographyTableRow>
			</TypographyTableBody>
		</TypographyTable>
	);
}

interface TypographyListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}
export function TypographyList({ className, children, ...props }: TypographyListProps) {
	return (
		<ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props}>
			{children}
		</ul>
	);
}

interface TypographyInlineCodeProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}
export function TypographyInlineCode({ className, children, ...props }: TypographyInlineCodeProps) {
	return (
		<code className={cn('bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)} {...props}>
			{children}
		</code>
	);
}

interface TypographyLeadProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}
export function TypographyLead({ className, children, ...props }: TypographyLeadProps) {
	return (
		<p className={cn('text-muted-foreground text-xl', className)} {...props}>
			{children}
		</p>
	);
}

interface TypographyLargeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export function TypographyLarge({ className, children, ...props }: TypographyLargeProps) {
	return (
		<div className={cn('text-lg font-semibold', className)} {...props}>
			{children}
		</div>
	);
}

interface TypographySmallProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}
export function TypographySmall({ className, children, ...props }: TypographySmallProps) {
	return (
		<small className={cn('text-sm leading-none font-medium', className)} {...props}>
			{children}
		</small>
	);
}

interface TypographyMutedProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}
export function TypographyMuted({ className, children, ...props }: TypographyMutedProps) {
	return (
		<p className={cn('text-muted-foreground text-sm', className)} {...props}>
			{children}
		</p>
	);
}

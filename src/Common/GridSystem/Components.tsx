/**
 * CONTAINER COMPONENT
 * 
 * The Container component provides the foundational wrapper for the grid system.
 * It centers content horizontally and applies responsive max-widths at different breakpoints.
 * 
 * Props:
 * - fluid: When true, creates a full-width container that spans the entire viewport
 * - children: React nodes to be rendered inside the container
 * - className: Additional CSS classes to apply to the container 
 */

import { type FC } from "react";

interface ContainerProps {
    fluid?: boolean;
    children: React.ReactNode; // Accepts anything that React is capable of rendering as its children (HTML Elements, Strings, Numbers, etc...)
    className?: string;
}

const Container: FC<ContainerProps> = ({
    fluid = false,
    children,
    className = ''
}) => {
    // Choose between fixed-width container (with responsive max-widths) or fluid container (full-width)
    const containerClass = fluid ? 'container-fluid' : 'container';

    return (
        <div className={`${containerClass} ${className}`}>
            {children}
        </div>
    );
};

/**
 * ROW COMPONENT
 * 
 * The Row component creates a horizontal group of columns using flexbox.
 * It handles the negative margins that offset the column padding to maintain proper alignment
 * 
 * Props:
 * - children: Column components or other React nodes
 * - className: Additional CSS classes for custom styling
 * - noGutters: When true, removes the spacing between columns
 */

interface RowProps {
    children: React.ReactNode;
    className?: string;
    noGutters?: boolean;
}

const Row: FC<RowProps> = ({
    children,
    className = '',
    noGutters = false
}) => {
    // Apply no-gutters class to remove spacing between columns if requested
    const rowClass = noGutters ? 'row no-gutters' : 'row';

    return (
        <div className={`${rowClass} ${className}`}>
            {children}
        </div>
    );
};

/**
 * COLUMN COMPONENT (This is where the meat and potatoes happen!)
 * 
 * The Col component represents individual columns within a row.
 * It supports responsive breakpoints and can specify different column widths at different screen sizes
 * My Grid System is based on 12 columns, so values 1-12 represent portions of the full Row
 * 
 * Breakpoint Props
 * - number (1-12): Specifies how many column this element should span
 * - 'auto': Column takes up only as much space as its content requires
 * - undefined: No specific width constraint for this breakpoint
 * 
 * Offset Props
 * - number (0-11): Adds left margin to push the column to the right
 * 
 * Breakpoint Sizes
 * - xxs: Extra small devices (phones, <576px)
 * - xs: Small devices (landscape phones, ≥576px)
 * - sm: Medium devices (tablets, ≥768px)
 * - md: Small desktop (small desktops, ≥992px)
 * - lg: Large desktop (medium desktops, ≥1200px)
 * - xl: Extra large desktop (large desktops, ≥1400px)
 * - xxl: Extra extra large desktop (larger desktops, ≥1600px)
 */

interface ColProps {
    children: React.ReactNode;
    className?: string;

    // Responsive column width props
    xxs?: number | 'auto';
    xs?: number | 'auto';
    sm?: number | 'auto'; 
    md?: number | 'auto';
    lg?: number | 'auto';
    xl?: number | 'auto';
    xxl?: number | 'auto';

    // Offset props - add left margin to push column to the right
    offsetXxs?: number;
    offsetXs?: number;
    offsetSm?: number;
    offsetMd?: number;
    offsetLg?: number;
    offsetXl?: number;
    offsetXxl?: number;
}

const Col: FC<ColProps> = ({
    children, 
    className = '',
    xxs,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    offsetXxs,
    offsetXs,
    offsetSm,
    offsetMd,
    offsetLg,
    offsetXl,
    offsetXxl
}) => {
/**
 * buildClasses - Constructs the CSS class string for the columns
 * 
 * This function dynamically builds the appropriate CSS classes based on the props passed.
 * It handles both column sizing and offset classes for all responsive breakpoints.
 * 
 * Class Naming Conventions:
 * - Column sizes: 'col-{breakpoint}-{size}' (e.g., 'col-md-6')
 * - Auto columns: 'col-{breakpoint}-auto' (e.g., 'col-lg-auto')
 * - Offsets: 'offset-{breakpoint}-{amount}' (e.g., 'offset-md-2')
 */

    const buildClasses = () => {
        const classes = ['col'];

        // Adds responsive column size classes for each breakpoint
        // check if size is defined, then check if its auto-width or specific column count
        if (xxs !== undefined) classes.push(xxs === 'auto' ? 'col-xxs-auto' : `col-xxs-${xxs}`);
        if (xs !== undefined) classes.push(xs === 'auto' ? 'col-xs-auto' : `col-xs-${xs}`);
        if (sm !== undefined) classes.push(sm === 'auto' ? 'col-sm-auto' : `col-sm-${sm}`);
        if (md !== undefined) classes.push(md === 'auto' ? 'col-md-auto' : `col-md-${md}`);
        if (lg !== undefined) classes.push(lg === 'auto' ? 'col-lg-auto' : `col-lg-${lg}`);
        if (xl !== undefined) classes.push(xl === 'auto' ? 'col-xl-auto' : `col-xl-${xl}`);
        if (xxl !== undefined) classes.push(xxl === 'auto' ? 'col-xxl-auto' : `col-xxl-${xxl}`);

        // Add offset classes for each breakpoint where offset is specified
        // Offsets create left margin to push the column away from the left edge
        if (offsetXxs !== undefined) classes.push(`offset-xxs-${offsetXxs}`);
        if (offsetXs !== undefined) classes.push(`offset-xs-${offsetXs}`);
        if (offsetSm !== undefined) classes.push(`offset-sm-${offsetSm}`);
        if (offsetMd !== undefined) classes.push(`offset-md-${offsetMd}`);
        if (offsetLg !== undefined) classes.push(`offset-lg-${offsetLg}`);
        if (offsetXl !== undefined) classes.push(`offset-xl-${offsetXl}`);
        if (offsetXxl !== undefined) classes.push(`offset-xxl-${offsetXxl}`);

        return classes.join(' ');
    };

    return (
        <div className={`${buildClasses()} ${className}`}>
            {children}
        </div>
    );
};

export { Container, Row, Col };
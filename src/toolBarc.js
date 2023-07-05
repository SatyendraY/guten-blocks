export default function toolbarc() {
	return (
		// id is required for server side rendering
		<Toolbar label="Options" id="options-toolbar">
			<ToolbarGroup>
				<ToolbarButton icon={ paragraph } label="Paragraph" />
			</ToolbarGroup>
			<ToolbarGroup>
				<ToolbarItem>
					{ ( toggleProps ) => (
						<DropdownMenu
							hasArrowIndicator
							icon={ alignLeft }
							label="Align"
							controls={ [
								{
									icon: alignLeft,
									title: 'Align left',
									isActive: true,
								},
								{
									icon: alignCenter,
									title: 'Align center',
								},
								{
									icon: alignRight,
									title: 'Align right',
								},
							] }
							toggleProps={ toggleProps }
						/>
					) }
				</ToolbarItem>
			</ToolbarGroup>
			<ToolbarGroup>
				<ToolbarButton>Text</ToolbarButton>
				<ToolbarButton icon={ formatBold } label="Bold" isPressed />
				<ToolbarButton icon={ formatItalic } label="Italic" />
				<ToolbarButton icon={ link } label="Link" />
				<ToolbarGroup
					isCollapsed
					icon={ false }
					label="More rich text controls"
					controls={ [
						{ icon: code, title: 'Inline code' },
						{ icon: <InlineImageIcon />, title: 'Inline image' },
						{
							icon: formatStrikethrough,
							title: 'Strikethrough',
						},
					] }
				/>
			</ToolbarGroup>
			<ToolbarGroup
				icon={ more }
				label="Align"
				isCollapsed
				controls={ [
					{
						icon: alignLeft,
						title: 'Align left',
						isActive: true,
					},
					{ icon: alignCenter, title: 'Align center' },
					{ icon: alignRight, title: 'Align right' },
				] }
			/>
		</Toolbar>
	);
}
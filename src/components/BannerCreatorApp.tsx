export const BannerCreatorApp: React.FC = () => {
  return (
    <article className='w-full px-5 bg-darkblue text-white sm:bg-transparent'>
      <div className='container space-y-4 sm:bg-darkblue sm:px-5 md:p-12'>
        <h3 className='text-2xl font-semibold uppercase tracking-widest'>Monogram Creator App</h3>
        <div className='font-light space-y-5'>
          <p>Included with every Console is Monogram Creator app, a free and powerful macOS and Windows app to optimize Creative Console to any workflow; no coding or scripting required.</p>
          <ul className='pl-8 list-disc'>
            <li>Adjust sensitivity and range for any control to get the perfect feel</li>
            <li>Set and change LED colors for any control</li>
            <li>Advanced gestures for every input: dial press, dial press & turn, key press, key press-and-hold, Orbiter tilt mode</li>
            <li>Standard input device mode: keyboard shortcuts, keyboard macros, joystick, mouse actions</li>
            <li>Digitally label modules and bring up a preview on screen for a reminder</li>
            <li>Unlock a new world of creativity with Audio, Photo, and Video Console Packs; giving your Console hundreds of more functions and profiles</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

# Task
## UI Rules
- Toggles either sit in a group or their own
  - UNCLEAR REQUIREMENT: is the label with toggle a toggle or switch like UI only?
  - I will assume the former, as it looks like that in the mockup, but for clarity scope out the switch as separate component
- They can sometimes have an additional input such as numeric dropdowns against the
toggle
- Some features have a parent child relationship e.g. users > users add
  - UNCLEAR REQUIREMENT: does it rely to the model or just showing the UI?
  - I will assume here model relation by using generic type
- If a parent toggle is enabled, the child toggles should be expanded and displayed
providing the ability to toggle them off/on
- If a parent toggle is disabled, the child toggles should be disabled and then collapsed
  - UNCLEAR REQUIREMENT: can it be reenabled when disabled? I'd assume no.
## Completing the task
- Use TypeScript
- A dynamic schema should be provided to drive the form. The input wording and
response should not be hardcoded into the UI
  - UNCLEAR REQUIREMENT: it may mean passing the labels etc by properties or a form generator.
  - For the time constrain I will assume the former.
- It doesn't have to fully reflect the UI; this task should give us a sense of your coding style and an insight into how you would structure a react app
- This can run on ReactDOM.render() on a single page for demo purposes

## Timeline

- Phase zero:
  - using prepared before bootstrap with CRA + TS + SCSS + Storybook as it should exists in the project already.
  - reading and reviewing the requirements

- Phase 1 - setting the components
- Phase 2 - setting styles
- Phase 3 - test
- Phase 4 - storybook

## TEST

```
nvm use 16
npx yarn
npx yarn start
// or
npx yarn test
// or
npx yarn storybook
```
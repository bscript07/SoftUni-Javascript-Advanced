function edit(refference, match, replacer) {
    const text = refference.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = text.replace(matcher, replacer);

    refference.textContent = edited;
}
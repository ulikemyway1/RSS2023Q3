import './sources.css';

class Sources {
    public draw(data: { id: string; name: string }[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp) {
                const sourceItemTempContent = sourceItemTemp.content.cloneNode(true);
                if (sourceItemTempContent instanceof DocumentFragment) {
                    const sourceClone = sourceItemTempContent;
                    if (sourceClone) {
                        const sourceCloneItemName = sourceClone.querySelector('.source__item-name');
                        if (sourceCloneItemName) sourceCloneItemName.textContent = item.name;
                        const sourceCloneItem = sourceClone.querySelector('.source__item');
                        if (sourceCloneItem) sourceCloneItem.setAttribute('data-source-id', item.id);
                        fragment.append(sourceClone);
                    }
                }
            }
        });
        const sources: HTMLElement | null = document.querySelector('.sources');
        if (sources) sources.append(fragment);
    }
}

export default Sources;

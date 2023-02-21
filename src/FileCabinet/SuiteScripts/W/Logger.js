/**
 *@NApiVersion 2.1
 */
 define([], function() {

    let _tag = 'Logger:';
    /**
     * @param {String} tag Tag to be preprended before logs
     */
    function configure(tag){
        _tag = tag[tag.length - 1] !== ':' ? tag + ':' : tag;
    }

    function debug(title, message) {
        log.debug(`${_tag} ${title}`, message);
    }

    return {configure, debug};


 });
(function($) {
  Drupal.behaviors.room_expenditure = {
    attach: function(context, settings) {
      $('.select-all').click(function() {
        var $this = $(this);
        var $thisCheckboxes = $(this).closest('.checkbox-container').find('input.checkbox');
        if ($this.is(':checked')) {
          $thisCheckboxes.prop('checked', true);
        }
        else {
          $thisCheckboxes.prop('checked', false);
        }
      });
      $('.checkbox-container input.checkbox').click(function() {
        var $this = $(this);
        var $parentContainer = $(this).closest('.checkbox-container');
        if (!$this.is(':checked')) {
          $parentContainer.find('input.select-all').prop('checked', false);
        }
        if ($parentContainer.find('input.checkbox:checked').length == $parentContainer.find('input.checkbox').length) {
          $parentContainer.find('input.select-all').prop('checked', true);
        }
      });
    }
  }
})(jQuery);


